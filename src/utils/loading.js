import { Loading } from "element-ui";

let loadingCount = 0;
let loading;

const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: "Loading...",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.2)",
    fullscreen: false,
    target: ".table-responsive",
  });
};

const startCardLoading = () => {
  loading = Loading.service({
    lock: true,
   // text: "Loading...",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.2)",
    fullscreen: false,
    target: ".row",
  });
};

const endLoading = () => {
  loading.close();
};

export const showLoading = () => {
  if (loadingCount === 0) {
    startLoading();
  }
  loadingCount += 1;
};

export const showCardLoading = () => {
  if (loadingCount === 0) {
    startCardLoading();
  }
  loadingCount += 1;
};

export const hideLoading = () => {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    endLoading();
  }
};
