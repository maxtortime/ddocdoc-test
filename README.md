# ddocdoc-coding-test
https://event.ddocdoc.com/curation 페이지를 React를 이용해서 똑같이 만들어보는 과제입니다.
[Create React App](https://github.com/facebook/create-react-app) 으로 구성했습니다.

## 설치 및 실행 방법
1. 터미널을 열고 본 저장소를 clone 합니다.
```sh
$ git clone https://github.com/maxtortime/ddocdoc-test
```
2. `nodejs`와 `npm`이 설치되어 있어야 합니다.
```sh
$ node --version
v10.13.0
$ npm --version
6.4.1
```
3. 터미널을 열고 `package.json`이 있는 디렉토리에서 `npm install`을 실행합니다.
4. 터미널에서 `npm start`를 실행합니다.
5. 기다리면 웹 브라우저가 열리고[http://localhost:3000](http://localhost:3000) 에서 페이지를 확인할 수 있습니다.
```sh
$ cd ddocdoc-test
$ npm install
$ npm start
```

## 프로젝트 구성
### npm 라이브러리 종속성
(`Create React App` (CRA)에서 설치하는 것은 제외)
- gh-pages: CRA 구조에서 GitHub Pages 배포를 쉽게 하기 위한 도구
- react-lazyload: `lazy loading` (브라우저에 보이는 이미지만 로딩)을 도와주는 컴포넌트
- axios: AJAX 통신을 쉽게 하기 위한 라이브러리

### 폴더 구조
```
.
├── README.md
├── package.json 
├── public 
│   ├── api-mock.json (CORS 문제로 API 데이터를 미리 다운 받아 놓음)
│   ├── icons 
│   │   ├── favicon.png
│   │   ├── icon-128x128.png (안드로이드에서 보일 아이콘을 사이즈별로 저장해놓음)
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   ├── icon-512x512.png
│   │   ├── icon-72x72.png
│   │   └── icon-96x96.png
│   ├── index.html
│   └── manifest.json (안드로이드에서 접속 시 관련 설정 정의)
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── assets
│   │   └── images
│   │       └── sprite.png
│   ├── components
│   │   ├── CurationList.js
│   │   ├── CurationListItem.css
│   │   ├── CurationListItem.js
│   │   ├── Footer.css
│   │   ├── Footer.js
│   │   ├── Header.css
│   │   ├── Header.js
│   │   ├── HeaderButton.css
│   │   ├── HeaderButton.js
│   │   ├── MenuHeaderItem.css
│   │   ├── MenuHeaderItem.js
│   │   ├── MenuHeaderItemList.js
│   │   ├── ScrollToTopButton.css
│   │   └── ScrollToTopButton.js
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
├── test
└── yarn.lock
```

### 컴포넌트 설명
- CurationList / CurationListItem: 각 광고 아이템(이미지, 설명)을 그리는 컴포넌트 및 그 목록
- Footer: 페이지 하단 footer를 그리는 컴포넌트
- Header: 페이지 상단 로고 및 링크를 그리는 컴포넌트
- HeaderButton: 페이지 상단의 검색, 찜하기 기능을 동작시키는 버튼
- MenuHeaderItemList / MenuHeaderItem: 헤더 메뉴의 각 링크를 그리는 컴포넌트 및 그 목록 