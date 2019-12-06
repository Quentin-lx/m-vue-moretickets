


//若需要别名：chainWebpack
//config.resolve.alias.set{key,value}


module.exports = {
    devServer: {
        proxy: {
          '/showapi': {
            target: 'https://m.moretickets.com/',
            changeOrigin: true
          },
          '/userdataapi':{
            target: 'https://m.moretickets.com/',
            changeOrigin: true
          }
          // '/shows_all': {
          //   target: 'https://m.moretickets.com',
          //   changeOrigin: true
          // },
          // '/shows_concert': {
          //   target: 'https://m.moretickets.com/showapi/pub/site/1101/active_show?offset=20&length=20&type=1&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=&siteCityOID=1101&lat=0&lng=0&time=1574347687489&src=m_web',
          //   changeOrigin: true
          // },
          // '/shows_opera': {
          //   target: 'https://m.moretickets.com/showapi/pub/site/1101/active_show?offset=20&length=20&type=3&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=&siteCityOID=1101&lat=0&lng=0&time=1574347928869&src=m_web',
          //   changeOrigin: true
          // },
          // '/shows_match': {
          //   target: 'https://m.moretickets.com/showapi/pub/site/1101/active_show?offset=20&length=20&type=6&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=&siteCityOID=1101&lat=0&lng=0&time=1574348160171&src=m_web',
          //   changeOrigin: true
          // },
          // '/shows_concertt': {
          //   target: 'https://m.moretickets.com/showapi/pub/site/1101/active_show?offset=20&length=20&type=2&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=&siteCityOID=1101&lat=0&lng=0&time=1574348537177&src=m_web',
          //   changeOrigin: true
          // },
          // '/shows_exhibition': {
          //   target: 'https://m.moretickets.com/showapi/pub/site/1101/active_show?offset=20&length=20&type=7&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=&siteCityOID=1101&lat=0&lng=0&time=1574348562105&src=m_web',
          //   changeOrigin: true
          // },
          // '/shows_dance': {
          //   target: 'https://m.moretickets.com/showapi/pub/site/1101/active_show?offset=20&length=20&type=5&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=&siteCityOID=1101&lat=0&lng=0&time=1574348654570&src=m_web',
          //   changeOrigin: true
          // },
          // '/shows_quyizatan': {
          //   target: 'https://m.moretickets.com/showapi/pub/site/1101/active_show?offset=20&length=20&type=4&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=&siteCityOID=1101&lat=0&lng=0&time=1574348684091&src=m_web',
          //   changeOrigin: true
          // },
          // '/shows_parenting': {
          //   target: 'https://m.moretickets.com/showapi/pub/site/1101/active_show?offset=20&length=20&type=9&sorting=weight&seq=desc&client=piaodashi_weixin&locationCityOID=&siteCityOID=1101&lat=0&lng=0&time=1574348728348&src=m_web',
          //   changeOrigin: true
          // },
          
          

        } 
    }
}