import axios from 'axios'

axios
    .get(
        'https://api.map.baidu.com/location/ip?ak=I697jBa9ZVIhaPnID1gxp7YSTocMVdQX&ip=36.57.148.129&coor=bd09ll',
        {
            headers: {
                Referer: 'hefeixiaomu.com'
            }
        }
    )
    .then(response => {
        console.log(response.data)
    })
