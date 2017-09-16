// 选择要的经纬度数据
let data = require('./data2')
let axios = require('axios')
let fs = require('fs')

let dataIndex = 0
getData(dataIndex)

function getData(index) {

  if (data.length === dataIndex) {
    return
  }

  axios
    .get(`http://apis.map.qq.com/ws/geocoder/v1/?location=${data[index][0]},${data[index][1]}&key=B3FBZ-ROEAX-UL547-7HS4W-U3ZT2`)
    .then(res => {
      let address = index + ' ' + res.data.result.address + res.data.result.formatted_addresses.recommend + '\n'
      console.log(address)

      // 设置输出的文件名称
      fs.appendFile('address2.txt', address, 'utf8');
      setTimeout(function() {
        getData(++dataIndex)
      }, 300);
    })
}
