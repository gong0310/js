document.title = "Promise-all/race";

function getdata(url) {
  return new Promise((resolve, reject) => {
    return $.ajax({
      type: "get",
      url: url,
      success: function (data) {
        resolve(data);
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
}

// getdata("http://localhost:3000/data.json").then(res=>{
//     console.log(res)
// })
// getdata("http://localhost:3000/data2.json").then(res=>{
//     console.log(res)
// })

//用多个异步任务并发运行，他的结果创建承诺之后使用，等待所有任务结果的完成
//只要有一个reject，就直接reject

Promise.all([
  //传Promise对象集合,如果不传返回[]空数组
  getdata("http://127.0.0.1:5500/promise/data.json"),
  getdata("http://127.0.0.1:5500/promise/data.json"),
])
  .then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  )
  .finally(() => {
    console.log("无论失败成功都执行finally");
  });

// Promise.allSettled

//谁先完成就返回那个promise的结果,不论是resolve reject，反正就是返回最快的
//可以测试资源或接口的响应速度
Promise.race([
  //传Promise对象集合,如果不传不返回
  getdata("http://127.0.0.1:5500/promise/data.json"),
  getdata("http://127.0.0.1:5500/promise/data.json"),
]).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

// 比如
function loadimg() {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.src = "https://cdn.eso.org/images/publicationjpg/eso1242a.jpg";
  });
}
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("图片请超时");
    }, 300);
  });
}
Promise.race([timeout(), loadimg()]).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
