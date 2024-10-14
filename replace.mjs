import { replaceInFile } from 'replace-in-file';
import packageInfo from './package.json' with { type: 'json' };

async function updatePackageVersion() {
  const options = {
    files: 'dist/_include-media.scss',
    from: /@version@/,
    to: packageInfo.version,
  };
  const results = await replaceInFile(options);
  console.log('Replacement results:', results);
}

updatePackageVersion();
