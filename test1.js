  //执行点击事件
  function formSubmit (e) {
 
    //声明当天执行的
    var that = this;

    // var x =document.createElement("P");
    // x.setAttribute("id","BMI");
    var x =document.getElementById("output");
    var t = document.createTextNode("your BMI is ");
    x.appendChild(t);
    document.body.appendChild(x);
 
    //获取表单所有name=keyword的值
    // var formData = e.detail.value.;
 
    // //显示搜索中的提示
    // wx.showLoading({
    //   title: '搜索中',
    //   icon: 'loading'
    // })
 
    // //向搜索后端服务器发起请求
    // wx.request({
 
    //   //URL
    //   url: 'http://localhost/search.php?keyword=' + formData,
 
    //   //发送的数据
    //   data: formData,
 
    //   //请求的数据时JSON格式
    //   header: {
    //     'Content-Type':'application/json'
    //   },
 
    //   //请求成功
    //   success: function (res) {
 
    //     //控制台打印（开发调试用）
    //     console.log(res.data)
 
    //     //把所有结果存进一个名为re的数组
    //     that.setData({
    //       re: res.data,
    //     })
 
    //     //搜索成功后，隐藏搜索中的提示
    //     wx.hideLoading();
    //   }
    // })
  }

