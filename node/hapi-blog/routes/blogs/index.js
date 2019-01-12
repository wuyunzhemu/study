const Joi=require('joi');

const GROUP_NAME='blogs';
const getList=require('./getList');
const {paginationDefine}=require('../../utils/router-helper')

const models=require('../../models')
//路由帮助文件 校验
module.exports=[
    getList(GROUP_NAME,{paginationDefine,models})
]