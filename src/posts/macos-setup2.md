---
title: "Oh My Zsh 설치"
date: "2024-01-01"
categories: [macos]
tag:
  [
    mac,
    macos,
    m1,
    m2,
    m3,
    setup,
    맥,
    재설치,
    초기화,
    zsh,
    oh-my-zsh,
    font,
    theme,
    iterm,
  ]
order: 2
published: true
typora-root-url: ../
---

### Oh My ZSH 설치

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### .zshrc 파일 추가 및 수정

```bash
...
# 기본 테마를 변경합니다.
ZSH_THEME="agnoster"
...
# 플러그인을 추가합니다.
puglins=(git node rails ruby)
...

# command 앞 정보를 변경합니다. (사용자의 입맛에 따라 수정하시면 됩니다.)
prompt_context(){}

# brew를 통해 설치한 zsh의 plugin으로 자동완성과 명령어 하이라이트입니다.
source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

```

위의 zsh-autosuggestions.zsh와 zsh-syntax-highlighting.zsh의 설치는 [**MacOS 재설치 - Homebrew 설치 및 설정 & App Store**](https://gennyoon.github.io/macos/macos-setup1/)을 참조 하거나 별도 설치는 다음과 같이 하시면 됩니다.

```bash
brew install zsh-autosuggestions
brew install zsh-syntax-highlighting
```

### Download Resource (Font & Theme)

<a href="https://github.com/GennYoon/iTerm" target="_blank" rel="noreferrer noopener">다운로드</a>

위의 링크는 필자가 사용하는 테마와 폰트로 `3024 Night Theme`와 `MesloLGS NF Font`, `D2 Coding Font`가 올라가있습니다. 자신만의 설정을 위해 찾는 것이 아니라면 사용해보세요.

### Font 설치 및 변경

ZSH_THEME를 변경하면 Command에 아이콘이 깨진듯하게 보입니다. <a href="https://github.com/naver/d2codingfont" target="_blank" rel="noreferrer noopener">D2Coding Font</a> 의 폰트를 설치해줍니다. 서체 설치 이후에 iTerm2에서 `Command + ,`를 눌러서 Profile > Text > Font에서 D2coding Font를 선택해줍니다.

![iTerm2 Font Setting](/images/2024-01-03-macos-setup2/iTerm2 Font Setting.png)

### Theme 변경

테마는 <a href="https://github.com/mbadolato/iTerm2-Color-Schemes" target="_blank" rel="noreferrer noopener">iTerm2 Color Schemes</a>에서 선택해서 설치 후에 iTerm2에서 `Command + ,`를 눌러서 Profiles > Colors > Color Presets > Import 하여 원하는 Color Scheme를 선택해줍니다.

![iTerm2 Theme Setting](/images/2024-01-03-macos-setup2/iTerm2 Theme Setting.png)

이후 같은 곳을 선택 후 설치한 Theme를 선택해줍니다.

### Working Directory 변경

![Working Directory](/../Project/blog/images/2024-01-03-macos-setup2/Working Directory-5069508.png)

iTerm의 기능이지만 추가해봅니다. 개발자의 특성상 터미널을 열면 바로 Workspace로 이동 되었으면 할 때가 있습니다. 이때 해당 폴더를 생성하고, Working Directory를 해당 폴더로 지정하시면 됩니다.

![iTerm Setting Done](/../Project/blog/images/2024-01-03-macos-setup2/iTerm Setting Done.png)

모든 작업이 완료되면 다음과 같은 화면으로 깔끔한 터미널을 이용 하실 수 있습니다. 프롬프트의 경우는 사용자의 입맛에 맞게 설정하시면 됩니다.
