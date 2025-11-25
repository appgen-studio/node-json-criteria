const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Recursively get all .js files in a directory
function getAllJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllJsFiles(filePath, fileList);
    } else if (file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

async function build() {
  try {
    console.log('Building with esbuild...');
    
    // Get all source files
    const srcDir = path.join(__dirname, 'src');
    const outDir = path.join(__dirname, 'lib');
    const sourceFiles = getAllJsFiles(srcDir);
    
    console.log(`Found ${sourceFiles.length} source files to transpile`);
    
    // Build each file individually to preserve structure
    const buildPromises = sourceFiles.map(async (file) => {
      const relativePath = path.relative(srcDir, file);
      const outFile = path.join(outDir, relativePath);
      const outFileDir = path.dirname(outFile);
      
      // Ensure output directory exists
      if (!fs.existsSync(outFileDir)) {
        fs.mkdirSync(outFileDir, { recursive: true });
      }
      
      return esbuild.build({
        entryPoints: [file],
        outfile: outFile,
        format: 'cjs',
        platform: 'node',
        target: 'node18',
        sourcemap: true,
        bundle: false,
        packages: 'external',
      });
    });
    
    await Promise.all(buildPromises);
    
    console.log('✓ Build completed successfully');
    console.log(`✓ Transpiled ${sourceFiles.length} files to lib/`);
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();

