const redis=require('../../redis')

module.exports = (GROUP_NAME, options) => ({
  method: 'GET',
  path: `/${GROUP_NAME}`,
  handler: async (request, reply) => {
    const { limit, page } = request.query;
    const offset = (page -1) * limit;
    // reply(limit, page, offset);
    const {client,getAsync,setAsync}=redis(request);

    // mysql 有IO压力，用户量一大不做缓存是不行的
    // redis 或早期的memorycatch 来做内存数据库 读取速度快没有IO压力

    // 取数据 redis有吗？ 通过key查询 有就直接返回 没有去mysql set 下
    //if else 
    const redisResName=`postlimit${limit}${offset}list`;
    const redisRes=await getAsync(redisResName);
    console.log('------------'+redisRes);
    if(redisRes){
      reply(JSON.parse(redisRes));
    }else{

    }
    
    await setAsync(redisResName,JSON.stringify({results,totalCount}));
    client.EXPIRE=(redisResName,50);
   
    const { rows: results, count: totalCount } = await options.models.blogs.findAndCountAll({
      limit,
      offset
    });
    reply({ results, totalCount });
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '获取文章列表',
    validate: {
      query: {
        ...options.paginationDefine
      }
    }
  }
})