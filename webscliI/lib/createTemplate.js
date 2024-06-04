import {makeList,log,makeInput,getLatestVersion} from "@webscli/u";
import {homedir} from 'node:os'
import path from 'node:path'

const ADD_TYPE_PROJECT = "project"
const ADD_TYPE_PAGE    = "page"
const ADD_TEMPLATE     = [{
  name:"vue3项目模板",
  value:"vue3",
  npmName:"@webstemplate/vue3",
  version:"1.0.0",
  forceInstall:true
},{
  name:"react18项目模板",
  value:"react18",
  npmName:"@webstemplate/react18",
  version:"1.0.0",
  forceInstall:true
}]
const ADD_TYPE        =[
  {
    name:"项目",
    value:ADD_TYPE_PROJECT
  },{
    name:"页面",
    value:ADD_TYPE_PAGE
  }
]
const TEMP_HOME       ='.cache-template'
function getAddType(){
  return makeList({
    choices:ADD_TYPE,
    message:'请选择初始化类型',
    defaultValue:ADD_TYPE_PROJECT
  })
}
//获取输入的名称
function getAddName(){
  return makeInput({
    message:'请输入项目名称',
    defaultValue:'',
    validate(v){
      if(v.length > 0){
        return true
      }
      return '项目名称必须输入'
    }
  })
}

function getAddTemplate(){
  return makeList({
    choices:ADD_TEMPLATE,
    message:'请选择项目模板'
  })
}
function makeTargetPath(){
  return path.resolve(`${homedir()}/${TEMP_HOME}`, 'addTemplate');
}
export default async function createTemplate(name,options){
  // 获取创建类型
  const addType = await getAddType();
  log.verbose('addType==',addType)
  if(addType === ADD_TYPE_PROJECT){
    const addName = await getAddName() //获取输入的名称
    log.verbose('addName==',addName)
    const addTemplate = await getAddTemplate() //获取选择的模板
    log.verbose('getAddTemplate==',getAddTemplate)
    const selectedTemplate = ADD_TEMPLATE.find(_=>_.value ===addTemplate)
    log.verbose('selectedTemplate==',selectedTemplate)
    const latestVersion = await getLatestVersion(selectedTemplate.npmName) //通过npm接口获取npm上的模板最新版本
    log.verbose('latestVersion==',latestVersion)
    selectedTemplate.version = latestVersion
    const targetPath = makeTargetPath()
    return {
      type:addType,
      name:addName,
      template:selectedTemplate,
      targetPath
    }
  }
}
