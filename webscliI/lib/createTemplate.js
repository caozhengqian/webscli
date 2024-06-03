import {makeList,log,makeInput} from "@webscli/u";

const ADD_TYPE_PROJECT = "project"
const ADD_TYPE_PAGE    = "page"
const ADD_TEMPLATE     = [{
  name:"vue3项目模板",
  value:"vue3",
  npmName:"@webstemplate/vue3",
  version:"1.0.0"
},{
  name:"react18项目模板",
  value:"react18",
  npmName:"@webstemplate/react18",
  version:"1.0.0"
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

function getAddType(){
  return makeList({
    choices:ADD_TYPE,
    message:'请选择初始化类型',
    defaultValue:ADD_TYPE_PROJECT
  })
}
function getAddName(){
  return makeInput({
    message:'请输入项目名称',
    defaultValue:''
  })
}

function getAddTemplate(){
  return makeList({
    choices:ADD_TEMPLATE,
    message:'请选择项目模板'
  })
}
export default async function createTemplate(name,options){
  // 获取创建类型
  const addType = await getAddType();
  log.verbose('addType==',addType)
  if(addType === ADD_TYPE_PROJECT){
    const addName = await getAddName()
    log.verbose('addName==',addName)
    const addTemplate = await getAddTemplate()
    log.verbose('getAddTemplate==',getAddTemplate)
    const selectedTemplate = ADD_TEMPLATE.find(_=>_.value ===addTemplate)
    log.verbose('selectedTemplate==',selectedTemplate)
    return {
      type:addType,
      name:addName,
      template:addTemplate
    }
  }
}
