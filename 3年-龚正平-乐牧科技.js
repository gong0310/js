function test1(seconds) {
  return new Promise((res) => {
    let timer = setInterval(() => {
      clearInterval(timer);
      res("成功");
    }, seconds * 1000);
  });
}
const getResult = async function (seconds) {
  const reuslt = await test1(seconds);
  console.log("test1结果=>", reuslt);
};
getResult(3);

function test2(callback, seconds, n) {
  let count = 0;
  function recurrence() {
    setTimeout(() => {
      callback();
      count++;
      if (count < n) {
        recurrence();
      }
    }, seconds * 1000);
  }
  recurrence();
}
test2(
  () => {
    console.log("test2回调666");
  },
  2,
  5
);

function test3(data) {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    if (item.split(",").length > 1) {
      data.splice(index, 1, ...item.split(","));
      index--;
    }
    if (!item) {
      data.splice(index, 1);
      index--;
    }
  }

  console.log("test3结果=>", data);
}
test3(["id1,", "id2,id3", "id4,id5,id6"]);
test3(["id1,", "id2,id3", "id4"]);

/**
 * 姓名：龚正平
 * 工作年限：3年
 * 电话：13126473395(微信同号)
 * 邮箱：gzp13126473395@163.com
 *
 * 期待与您共事!!!
 */
