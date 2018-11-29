# ddocdoc-coding-test
https://event.ddocdoc.com/curation 페이지를 React와 Redux를 이용해서 똑같이 만들어보는 과제입니다.
[Create React App](https://github.com/facebook/create-react-app) 으로 구성했습니다. (2.1.1 버전)

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
- react-redux: react에서 redux 사용을 돕는 라이브러리
- redux-thunk: ??

### 디렉토리 / 컴포넌트 구조
```sh
.
├── public
│   └── icons # 사용자가 Android에서 화면을 볼 때 필요한 아이콘
└── src
    ├── api # axios를 이용해서 API 호출을 해서 데이터를 가져오는 모듈
    ├── assets # 코드 상에서 화면을 그리기 위해 필요한 이미지 등이 저장된 폴더
    │   └── images
    ├── components
    │   ├── CurationList # 광고들의 목록을 담아서 그리는 컴포넌트
    │   │   └── CurationListItem # 각 광고에 해당하는 컴포넌트
    │   ├── Footer # 페이지 하단 Footer를 구성하는 컴포넌트
    │   ├── Header # 페이지 상단 로고 및 메뉴를 구성하는 컴포넌트
    │   │   ├── HeaderButton # 헤더에서 검색 및 찜하기 버튼 컴포넌트
    │   │   └── MenuHeaderItemList # 헤더에서 각 메뉴 요소를 담는 목록 컴포넌트
    │   │       └── MenuHeaderItem # 헤더에서 각 메뉴를 구성하는 컴포넌트
    │   └── ScrollToTopButton # 페이지 상단으로 스크롤 해주는 버튼 컴포넌트
    ├── container # Redux 와 통신해서 실제 화면을 그릴 컴포넌트에게 데이터를 전달하는 역할
    │   └── CurationListContainer # CurationList 에게 Redux 에서 변경한 데이터를 전달하는 역할
    └── store # Redux 에서 데이터를 종합적으로 관리하는 역할
```

## 배포하기
GitHub Pages를 이용해서 배포할 경우 아래의 명령어를 실행하면 됩니다.
```sh
$ npm deploy
# GitHub 아이디와 비밀번호를 입력하면
# gh-pages 브랜치에 프로덕션 용으로 빌드된 파일이 알아서 옮겨지고
# http://<GitHub아이디>.github.io/<저장소이름> 에 페이지가 배포됩니다.
```