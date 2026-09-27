(function(){
  // =========================================================
  // 🔧 ここにブックマークレットの機能を追加・編集します
  // =========================================================
  const scripts = [
    {
      name: '背景をダークに',
      action: () => {
        // ここに処理の中身を書く
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#ddd';
      }
    },
    {
      name: '画像を非表示',
      action: () => {
        document.querySelectorAll('img').forEach(img => img.style.display = 'none');
      }
    }
    // ★新しい機能を追加する場合は、上の } と ] の間にカンマ(,)を打って追加します
  ];

  // =========================================================
  // 🎨 これ以降はメニュー画面を作るシステム（基本いじらなくてOK）
  // =========================================================
  const menuId = 'my-custom-bml-launcher';
  const oldMenu = document.getElementById(menuId);
  if (oldMenu) { oldMenu.remove(); return; } // すでに開いていたら閉じる

  const menu = document.createElement('div');
  menu.id = menuId;
  menu.style.cssText = 'position:fixed;top:20px;right:20px;z-index:2147483647;background:#f8f9fa;border:1px solid #ccc;border-radius:8px;padding:12px;box-shadow:0 4px 15px rgba(0,0,0,0.2);display:flex;flex-direction:column;gap:8px;width:200px;font-family:sans-serif;';

  const title = document.createElement('div');
  title.innerText = '🛠 マイツール';
  title.style.cssText = 'font-weight:bold;font-size:14px;color:#333;text-align:center;margin-bottom:4px;';
  menu.appendChild(title);

  scripts.forEach(script => {
    const btn = document.createElement('button');
    btn.innerText = script.name;
    btn.style.cssText = 'padding:8px;cursor:pointer;border:1px solid #ddd;border-radius:4px;background:#fff;color:#333;font-size:13px;text-align:left;transition:0.2s;';
    btn.onmouseover = () => btn.style.background = '#e9ecef';
    btn.onmouseout = () => btn.style.background = '#fff';
    btn.onclick = () => {
      script.action(); // 機能を実行
      menu.remove();   // 実行後にメニューを閉じる（閉じたくない場合はこの行を消す）
    };
    menu.appendChild(btn);
  });

  const closeBtn = document.createElement('button');
  closeBtn.innerText = '✖ 閉じる';
  closeBtn.style.cssText = 'margin-top:4px;padding:6px;cursor:pointer;border:none;background:transparent;color:#888;font-size:12px;';
  closeBtn.onclick = () => menu.remove();
  
  menu.appendChild(closeBtn);
  document.body.appendChild(menu);
})();
