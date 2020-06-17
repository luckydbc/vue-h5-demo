
// 加入收藏夹
export function addFavorite(sURL, sTitle) {
  try {
    window.external.addFavorite(sURL, sTitle);
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, '');
    } catch (e) {
      alert('加入收藏失败，请使用Ctrl+D进行添加');
    }
  }
}