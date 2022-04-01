/**
 * @name: tool
 * @author: chuanchuan
 * @date: 2022-04-01 14:39
 * @description：tool
 * @update: 2022-04-01 14:39
 */

/* eslint-disable no-param-reassign */
function moveTo(start, end, dom, prop) {
  let dis = 0;
  let speed = 5;
  if (end < 0) {
    speed *= -1;
  }
  const t = setInterval(() => {
    dis += speed;
    dom[prop] = start + dis;
    if (Math.abs(dis) > Math.abs(end)) {
      dom[prop] = start + end;
      clearInterval(t);
    }
  }, 2);
}

export default { moveTo };
