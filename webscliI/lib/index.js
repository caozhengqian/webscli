import Command from '@webscli/com'
import { log } from '@webscli/u'
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
    // console.log(`%c intide action`, "color:red");
    log.info('init',name,opts)
    new Promise(resolve=>{
      resolve()
    }).then(()=>{
      throw new Error('error from Promise')
    })
    throw new Error('普通异常')
  }
}
function Index(instance){
  return new InitCommand(instance);
}
export default Index;
