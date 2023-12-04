document.getElementById('sidebarToggle').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        sidebar.style.width = '100%'; // 사이드바의 너비를 100%로 설정합니다.
        sidebar.style.zIndex = '100'; // 사이드바를 최상위 레이어로 설정합니다.
    } else {
        sidebar.style.display = 'none';
    }
});
