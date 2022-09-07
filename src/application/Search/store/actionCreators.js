import { SET_HOT_KEYWRODS, SET_SUGGEST_LIST, SET_RESULT_SONGS_LIST, SET_ENTER_LOADING, INSERT_SONG } from './constants';
import { fromJS } from 'immutable';
import { getHotKeyWordsRequest, getSuggestListRequest, getResultSongsListRequest, getSongDetailRequest } from './../../../api/request';

const changeHotKeyWords = (data) => ({
  type: SET_HOT_KEYWRODS,
  data: fromJS(data)
});

const changeSuggestList = (data) => ({
  type: SET_SUGGEST_LIST,
  data: fromJS(data)
});

const changeResultSongs = (data) => ({
  type: SET_RESULT_SONGS_LIST,
  data: fromJS(data)
});

export const changeEnterLoading = (data) => ({
  type: SET_ENTER_LOADING,
  data
});

export const getHotKeyWords = () => {
  return dispatch => {
    getHotKeyWordsRequest().then(data => {
      // 拿到关键词列表
      let list = data.result.hots;
      dispatch(changeHotKeyWords(list));
    }).catch(() => {console.log("getHotKeyWordsRequest err")})
  }
};
export const getSuggestList = (query) => {
  return dispatch => {
    getSuggestListRequest(query).then(data => {
      if (!data) return;
      let res = data.result || [];
      dispatch(changeSuggestList(res));
    }).catch(() => {console.log("getSuggestListRequest err")})
    getResultSongsListRequest(query).then(data => {
      if (!data) return;
      let res = data.result.songs || [];
      dispatch(changeResultSongs(res));
      dispatch(changeEnterLoading(false));// 关闭 loading
    }).catch(() => {console.log("getResultSongsListRequest err")})
  }
};