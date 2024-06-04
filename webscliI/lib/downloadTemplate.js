import path from'node:path'
import {pathExistsSync} from "path-exists";
import fse from 'fs-extra'
import ora from 'ora'
import { printErrorLog, log}from '@webscli/u'
import {execa} from "execa";

function getCacheDir(targetPath) {
  return path.resolve(targetPath, 'node_modules');
}
function makeCacheDir(targetPath){
  const cacheDir = getCacheDir(targetPath)
  if(!pathExistsSync(cacheDir)){
    fse.mkdirpSync(cacheDir)
  }
}
async function downloadAddTemplate(targetPath, selectedTemplate) {
  const { npmName, version } = selectedTemplate
  console.log(`%c ${JSON.stringify(selectedTemplate)}`, "color:red");
  const installCommand = 'npm';
  const installArgs = ['install', `${npmName}@${version}`];
  const cwd = targetPath;
  log.verbose('installArgs', installArgs);
  log.verbose('cwd', cwd);
  await execa(installCommand, installArgs, { cwd });
}
export default async function downloadTemplate(seletedTemplate){
  const {targetPath,template} = seletedTemplate
  makeCacheDir(targetPath)
  const spinner = ora('正在下载模板...').start()
  try{
    await downloadAddTemplate(targetPath, template);
    setTimeout(()=>{
      spinner.stop()
      log.success('模板下载成功')
    },2000)

  } catch (e) {
      spinner.stop()
      printErrorLog(e)
  }
}
