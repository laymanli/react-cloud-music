import styled, { keyframes } from "styled-components";
import style from "../../../assets/global-style";

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;
export const NormalPlayerContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  background: ${style["background-color"]};
  &.normal-enter {
    transform: translate3d(0, 100%, 0);
  }
  &.normal-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
  }
  &.normal-exit {
    transform: translate3d(0, 0, 0);
    transition: all .4s
  }
  &.normal-exit-active {
    transform: translate3d(0, 100%, 0);
    transition: all .4s
  }
  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(2rem);
    &.layer {
      background: ${style["font-color-desc"]};
      opacity: 0.3;
      filter: none;
    }
  }
`;
export const Top = styled.div`
  position: relative;
  margin-bottom: 3.5rem;
  .back {
    position: absolute;
    top: 0;
    left: 2rem;
    z-index: 50;
    .iconfont {
      display: block;
      padding: 2rem;
      font-size: 8rem;
      color: ${style["font-color-desc"]};
      font-weight: bold;
      /* transform: rotate(-90deg); */
    }
  }
  .title {
    width: 70%;
    margin: 0 auto;
    padding-top: 1rem;
    line-height: 8rem;
    text-align: center;
    font-size: 4rem;
    color: ${style["font-color-desc"]};
    ${style.noWrap()};
  }
  .subtitle {
    line-height: 4rem;
    text-align: center;
    font-size: 4rem;
    color: ${style["font-color-desc-v2"]};
    ${style.noWrap()};
  }
`;
export const Middle = styled.div`
  position: fixed;
  width: 100%;
  top: 11rem;
  bottom: 24rem;
  white-space: nowrap;
  font-size: 0;
  overflow: hidden;
`;
export const CDWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 10%;
  left: 0;
  right: 0;
  width: 80%;
  box-sizing: border-box;
  height: 80vw;
  z-index: 999;
  .cd {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid rgba(255, 255, 255, 0.1);
    }
    .play {
      animation: ${rotate} 20s linear infinite;
      &.pause {
        animation-play-state: paused;
      }
    }
  }
  .playing_lyric {
    margin-top: 3rem;
    font-size: 2rem;
    line-height: 4rem;
    white-space: normal;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 14rem;
  width: 100%;
`;
export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  padding: 2rem 0;
  .time {
    color: ${style["font-color-desc"]};
    font-size: 4rem;
    flex: 0 0 5rem;
    line-height: 5rem;
    height: 5rem;
    width: 12rem;
    &.time-l {
      text-align: left;
      padding-right: 2rem;
    }
    &.time-r {
      text-align: right;
      padding-left: 2rem;
    }
  }
  .progress-bar-wrapper {
    flex: 1;
  }
`;
export const Operators = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  .icon {
    font-weight: 300;
    flex: 1;
    color: ${style["font-color-desc"]};
    &.disable {
      color: ${style["theme-color-shadow"]};
    }
    i {
      font-weight: 300;
      font-size: 8rem;
    }
  }
  .i-left {
    text-align: right;
    /* margin-left: 1rem; */

  }
  .i-center {
    padding: 0 4rem;
    text-align: center;
    i {
      font-size: 10rem;
    }
  }
  .i-right {
    text-align: left;
  }
  .icon-favorite {
    color: ${style["theme-color"]};
  }
`;

export const LyricContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 20rem;
  bottom: 0;
  height: 90rem;
  overflow: hidden;
`;
export const LyricWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 90rem;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
  p {
    line-height: 10rem;
    color: rgba(255, 255, 255, 0.5);
    white-space: normal;
    font-size: 4rem;
    &.current {
      color: #fff;
    }
    &.pure {
      position: relative;
      top: 30vh;
    }
  }
`;