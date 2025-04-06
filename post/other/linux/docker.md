---
title: 도커에 관하여
date: 2025-4-03T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP -->
이미 서버에서는 도커를 통해 Adguard, Wireguard, Syncthing, Qbittorrent 등 여러 서비스를 돌리고 있어서 고작 로컬 컴퓨터에서 Syncthing 하나 돌리기 위해 도커를 설치할 생각은 없었다. 하지만 연습도 하고 도커의 장점을 더 깊숙하게 파보고자 도커에 Syncthing을 설치해보기로..

<!-- AI Summerized -->

<!-- DESC SEP -->
:::

### 서론

이미 서버에서는 도커를 통해 Adguard, Wireguard, Syncthing, Qbittorrent 등 여러 서비스를 돌리고 있어서 고작 로컬 컴퓨터에서 Syncthing 하나 돌리기 위해 도커를 설치할 생각은 없었다. 하지만 연습도 하고 도커의 장점을 더 깊숙하게 파보고자 도커에 Syncthing을 설치해보기로..



# 도커에 관하여 (그리고 설치)

## 왜 써요? (chatGPT의 답변)

### 📦 도커로 설치할 때의 장점

1. 시스템과 격리

    Syncthing이 컨테이너 안에서 동작하므로, 호스트 시스템과 격리되어 있습니다.
    의존성이나 설정이 OS와 충돌할 걱정이 없습니다.

2. 손쉬운 삭제 및 재설치

    docker stop, docker rm, docker run 등으로 설치와 제거가 매우 간단합니다.
    설정은 volume에 따로 두면 그대로 유지됩니다.

3. 버전 관리 및 업데이트 용이

    특정 버전으로 고정하거나 업데이트도 docker pull 한 줄이면 됩니다.
    다른 버전으로도 동시에 실행 가능 (포트만 다르게 하면 됨)

4. 이식성

    설정된 컨테이너를 다른 서버로 옮기기도 쉽습니다.
    docker-compose.yml 파일로 배포 자동화 가능.

5. 클린한 시스템 유지

    Syncthing이 의존하는 패키지들을 OS에 설치할 필요가 없음.
    시스템이 깨끗하게 유지됩니다.

### 🛠️ 베어메탈(직접 설치)의 단점

| 항목             | 설명 |
|------------------|------|
| 의존성 충돌       | Syncthing이 요구하는 패키지가 이미 설치된 다른 패키지들과 충돌할 수 있음 |
| 업데이트 관리 불편 | Syncthing을 최신으로 유지하려면 수동 업데이트 또는 외부 저장소(PPA 등) 추가 필요 |
| 삭제 시 흔적 남음 | 설정 파일, 로그, 실행 바이너리 등이 시스템 여러 위치에 남아 수동 정리 필요 |
| 테스트 어려움     | 여러 버전을 동시에 설치하거나 테스트하기 어려움 (환경 격리 불가) |
| 이식성 낮음       | 설정과 데이터를 다른 시스템으로 옮기기 번거로움 (수동 복사 필요) |


### 📋 예시로 비교: Syncthing 설치
1. 베어메탈 설치 (Ubuntu 예시)

```zsh
sudo apt install syncthing
```

- 설정: ~/.config/syncthing 등에 저장

- 서비스 등록, 포트 열기, 방화벽 설정 수동 필요

2. 도커 설치
```zsh
docker run -d \
  --name syncthing \
  -v /your/data:/var/syncthing \
  -v /your/config:/var/syncthing/config \
  -p 8384:8384 \
  -p 22000:22000/tcp \
  -p 22000:22000/udp \
  -p 21027:21027/udp \
  syncthing/syncthing
```

- 설정 및 데이터는 볼륨으로 보존됨
- 삭제/재설치 간편

### 🧾 결론

| 항목             | 도커                              | 베어메탈                            |
|------------------|-----------------------------------|-------------------------------------|
| 시스템 청결       | ✅ 높음                           | ❌ 낮음                             |
| 업데이트          | ✅ `docker pull`로 간편           | ❌ 수동으로 관리하거나 PPA 필요      |
| 설정 이식성       | ✅ volume만 복사하면 됨           | ❌ 수동 백업 필요                   |
| 설치/삭제 편의성 | ✅ `docker run` / `rm` 한 줄이면 됨 | ❌ 설치 흔적 남고, 수동 정리 필요    |
| 복잡도           | ⭕ 약간의 도커 학습 필요          | ⭕ 리눅스 설치에 익숙하다면 쉬움     |
| 성능             | ⭕ 약간의 오버헤드 있음            | ✅ 직접 실행이라 성능 최적    


## 한번 설치해보자

### 🐳 도커 데스크탑, 도커 엔진, 도커 컴포즈 차이

도커 설명을 보니 종류가 꽤나 된다. 대표적으로..

| 구성요소          | 설명 |
|-------------------|------|
| **Docker Engine** | 실제로 컨테이너를 실행하고 관리하는 핵심 엔진  |
| **Docker Desktop** | Windows/Mac용 GUI 기반 도커 관리 프로그램 |
| **Docker Compose** | 여러 개의 컨테이너를 하나의 서비스처럼 정의하고 실행할 수 있게 해주는 도구 |

도커 문서를 읽어보면 Engine, Compose 를 Open source 에 묶어두고 Desktop 을 Application에 묶어두었는데 아마 기능과 범주를 통해 툴과 어플리케이션으로 나눠놓은듯 하다.

초심자인 나에게는 CLI로 관리하기 무리가 있다고 느껴지니 데스크탑을 설치하려 하였으나, 굳이 설명에 데스크탑 vs 엔진 차이를 적어놓은것 보니 이유가 있는듯하다. 

- 도커 데스크탑은 VM안에서 컨테이너로 실행
- 도커 엔진은 호스트 OS에서 실행
- 하지만 포트 충돌 가능성이 있음

그래서 도커 데스크탑을 사용할때는 엔진을 끄고 하라는데.. 엔진부터 설치해보고 부족함을 느끼면 데스크탑을 설치해보기로.


[도커 엔진 문서](https://docs.docker.com/engine/)


## 그럼 이제 목표였던 Syncthing을..

[Syncthing](https://github.com/syncthing/syncthing/blob/main/README-Docker.md)

Syncthing 도커 설치는 매우 간편하다. `sudo` 권한을 요구하는게 좀 찝찝하면 사용자를 docker 그룹에 추가해서 해볼 것.

```zsh
sudo usermod -aG docker $USER

```

참고로 `/wherever/st-sync` 는 예제이며 다른곳으로 매핑하기를..^^

```zsh
$ docker pull syncthing/syncthing
$ docker run -p 8384:8384 -p 22000:22000/tcp -p 22000:22000/udp -p 21027:21027/udp \
    -v /wherever/st-sync:/var/syncthing \
    --hostname=my-syncthing \
    syncthing/syncthing:latest
```

## 재부팅후 해아할 것

리눅스 초심자로써 루틴이 하나 있는데 서비스를 등록하면 startup 시 시작되는지 확인하기 위해  반드시 재부팅을 해본다. 시작이 안되어있다면 아래 명령어로 등록을 해주고

```zsh
sudo docker update --restart unless-stopped {CONTAINER_ID}
sudo docker start {CONTAINER_ID}
```

구동되는것이 확인되면 재 로그인 해서 확인해본다.