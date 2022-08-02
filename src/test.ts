const axios = require('axios')

axios
    .get(
        'https://ljgk.envsc.cn/ljfspsinfo/EnterpriseData/526FD60C4D8D83881802A72B2C8A30C6?_=1659343902134'
    )
    .then(data => {
        console.log(data)
    })
