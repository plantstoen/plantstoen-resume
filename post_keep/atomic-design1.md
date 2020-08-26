---
title: "How to put a atomic design into your project"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
index: "3"
date: "2020-03-08T05:35:07.322Z"
author:
  name: Sangmin Kim
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

이번에 작은 랜딩페이지를 개발하게 되면서 블로그 글로만 접했던 아토믹 디자인 패턴을 도입해 개발하게 되었습니다. 개발 후 아토믹 디자인 패턴에 대한 감탄과 동시에 한숨이 나오는 자신의 코드를 보았고, 아토믹 디자인 패턴을 추상적인 개념만 가지고 적용하기엔 정말 어렵다고 느껴 좀 더 구체적이고 사례 중심적으로 이 좋은 방법론을 프로젝트에 적용하는 방법에 대해 글을 쓰게 되었습니다.

\*\*이 글은 아토믹 디자인 패턴에 대해 개인적인 의견을 다룹니다.

# Chapter 0. 아토믹 디자인?

## 거꾸로 된 구조를 피해라

어떻게 보면 당연한 말이겠지만, atom컴포넌트 내부에서 molecule을 사용하고 있거나, molecule컴포넌트 내부에서 organism을 사용하는 형태는 피해야 합니다. 이렇게 거꾸로 되있는 형태는 디자인 시스템을 깨뜨려 협업을 어렵게 합니다.
하지만 복잡하고 자주 사용되는 레이아웃을 가져야 하는 molecule이나 organism에서 template 디렉토리 안에 작성된 컴포넌트를 import해 사용하는 것은 때로는 좋은 방법이라고 느꼈습니다. 이는 추후 블로그 글에서 general template과 page template의 분할이라는 주제로 다시 소개하도록 하겠습니다.

## 네이밍에 규칙을 정하고 충분히 시간을 들여라

혼자 프로젝트를 진행하며 느낀 아토믹 디자인 패턴의 가장 큰 어려움은 다름아닌 네이밍이었습니다. 만들게 되는 컴포넌트의 수도 전통적인 방식보다 많아지고, 다뤄야 하는 props도 많으며, 여기에 전역 상태 관리 또는 커스텀 훅 등을 도입하려고 하면 이름을 지어줘야 하는 것이 엄청나게 많아집니다.
실제로 프로젝트가 점점 커질수록 혼자서 진행하는데도 이름때문에 많은 시간을 소비했습니다(한 헤더 Atom의 잘못된 네이밍때문에 유사한 Atom을 만드는 실수도..). 따라서 프로젝트가 크고 참여하는 인원이 많을수록 더더욱 네이밍에 대해 규칙을 세우고, 이를 적용하려고 하는 노력이 중요합니다.

## Atom만은 재사용성이 높도록 설계하자

텀블벅 페이지의 하단 배너
사실 아토믹 디자인 패턴을 적용해 개발을 하다보면, 어쩔수 없이 만들어야 하는 molecule, organism이지만 그것들이 정작 UI에서 한두번만 사용되는 경우가 꽤 빈번하게 일어납니다. 위 하단 배너와 같은것이 그 예인데, 이런 컴포넌트를 만들고 나면 어쩔 수 없지만 재사용성이 떨어지는 것 같은 딜레마에 빠지게 됩니다.
따라서 molecule이나 organism에서는 재사용성에 대한 강박을 조금 내려놓고 상황에 맞게 만들어 주면 되지만, Atom은 최대한 재사용성이 높도록 설계해야 합니다. 그리고 만약 만든 Atom이 재사용이 거의 필요 없는 Atom이라면, 그것을 Atom으로 만드는 것이 옳은지에 대해서도 생각해볼 필요가 있습니다.

# Chapter 1. Atom

## 위치를 결정하는 스타일 속성은 props로 받자

Image for post
margin을 props로 주입하는 예시
Atom에는 padding, margin 등 위치를 결정하는 스타일 속성이 직접 부여되면 해당 Atom의 재사용성을 떨어트립니다. 따라서 Atom단계에서 위치의 조정이 필요한 것들만 props를 통해 외부에서 주입하여 위와 같이 사용하는 것이 좋습니다.
저의 경우에는 text-align과 같은 정렬과 관련된 속성도 필요하다면 외부에서 주입해서 사용하는 것이 좋다고 판단, 헤더 컴포넌트에 이를 사용하였습니다.

## 어떤 곳에서든 똑같은 색이나 폰트 크기는 props로 받지 말아라

Image for post
위 코드에서 color, font-size를 styled-components의 theme provider로 받는 예시
서비스 전체에서 일관되게 적용되는 색이나 폰트 크기 등은 css reset을 통해 각 요소별로 바꿔주거나, styled-components의 theme provider, Sass 변수 사용 등을 통해 props가 아닌 곳에서 스타일이 주입되어야 합니다.
만약 이렇게 하지 않고 전부 props로 받는다면, 위 코드에 해당하는 헤더의 폰트 사이즈나 색상 수정이 필요할 때 넘겨주는 props를 전부 바꿔야 하는 번거로움과 일부를 수정하지 못해 UI의 일관성이 깨지는 문제가 생길 수 있습니다.

## 동적인 효과가 필요한 Atom

트랜지션이나 트랜스폼등의 효과가 필요한 Atom의 경우, 그 Atom이 “트랜지션 또는 트랜스폼이 제거된 상태로도 필요할 가능성이 있나?” 를 곰곰히 생각해 봐야 합니다. 만약 그렇다면, props으로 isAnimation와 같은 boolean값을 받아 애니메이션 여부를 결정하도록 해야 합니다.
특히 트랜스폼은 해당 Atom의 위치를 예상하기 어려운 곳으로 바꿔놓을 수 있으므로, 사용에 있어 주의하여야 합니다.

## 로직과의 연결이 필요한 Atom에 함수를 전달하라

Image for post
changeFeature함수 전달을 통해 버튼의 기능을 구현한 예시
위 코드는 버튼이 눌렸을 때 어떤 로직을 실행시켜야 하는 Atom컴포넌트를 props로 함수를 전달하여 구현한 예시입니다. 이는 로직과 UI를 분리시킨 후 필요에 따라 주입할 수 있다는 점에서 굉장히 높은 편리성과 코드의 깔끔함을 제공합니다. 특히 커스텀 훅을 만든 후 함수를 반환시켜서 사용하는 것이 좋다고 생각합니다.

# Chapter 2. Molecule

서비스 내에서 변하지 않는 데이터는 Molecule에서부터 주입하기
Image for post
고정적인 데이터를 Molecule단계에서 주입하는 예시
모든 props 주입이 무조건 page에서만 일어나는건, props drilling문제가 크고 자주 일어나게 하는 문제를 수반합니다. 따라서 사용자 이름이나 블로그 포스트의 제목 등 “동적으로 변하는 데이터"는 page로부터 주입되는것이 맞는데, 변하지 않는 데이터를 atom에 주입하는 경우에는 위와 같이 Molecule단계부터 주입하는 것이 좋다고 생각합니다. 같은 원리로 organism, template에서도 주입이 가능합니다.
한 종류의 Atom만 있더라도 Molecule을 만들수 있다
아토믹 디자인 패턴과 관련된 글을 읽다 보면, 대부분의 글에서 “molecule은 2개 이상의 atom으로 구성된다" 라는 내용을 볼 수 있습니다. 물론 정말 한 종류의 아톰이 딱 1개만 사용되는건 뭔가 부자연스럽지만, 한 종류의 아톰만 사용한다고 해도 Molecule은 성립될 수 있다고 생각합니다.
Image for post
애플 웹사이트의 네비게이션 바 중 일부
Mac, iPad 등 각각의 페이지로 연결되는 링크 역할을 하는 컴포넌트를 Atom으로 보면, 한 종류의 Atom을 총 7개를 사용하여 하나의 Molecule을 구성했다고 볼 수 있습니다.
같이 읽으면 좋은 글
Seunghyun Yu 님의 ABEM(Atomic design + BEM)
ABEM (Atomic design + BEM)
디자인 시스템 구축과 네이밍 규칙을 통해 체계적으로 개발하기
medium.com
TOAST UI의 글
리액트 어플리케이션 구조 - 아토믹 디자인
필자는 처음 프로그래밍을 시작했을 때, 디자인 패턴, 파일구조와 같은 추상적인 프로그래밍의 개념과 중요성을 전혀 몰랐다. 하지만 호텔 관련 어플리케이션을 만들면서 그 중요성에 대해 알게 되었다. 어플리케이션의 주요…
ui.toast.com
