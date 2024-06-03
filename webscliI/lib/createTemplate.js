import {makeList} from "@webscli/u";

const ADD_TYPE_PROJECT = "project"
const ADD_TYPE_PAGE    = "page"
const ADD_TEMPLATE     = [{
  name:"vue3项目模板",
  npmName:"@webstemplate/vue3",
  version:"1.0.0"
},{
  name:"react18项目模板",
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
export default async function createTemplate(name,options){
  // 获取创建类型
  const addType = await getAddType();
  log.verbose('addType==',addType)
}
