import Command from '@webscli/com'
import { log } from '@webscli/u'
import createTemplate from "./createTemplate.js";
class InitCommand extends  Command{

  get command(){
    return 'init [name]'
  }
  get description(){
    return 'init description project'
  }
  get options(){
    return[
      ['-f, --force','是否强制更新',false],
      ['-vv, --vvv','是否vvv',false]
    ]
  }
  action([name,opts]){
    log.info('init',name,opts)
    createTemplate(name,opts) //1.选择项目模板，生成项目信息
    //2.下载项目模板至缓存目录
    //3.安装项目模板至项目目录
  }
}
function Index(instance){
  return new InitCommand(instance);
}
export default Index;
