/**
 * DSA Platform - Storage Service
 * Manages localStorage for solved status, favorites, code snippets per problem/language, and preferences.
 */

window.LocalStorageService = {
  SOLVED_KEY: 'dsa_platform_solved_ids',
  FAVORITES_KEY: 'dsa_platform_favorite_ids',
  PREF_LANG_KEY: 'dsa_platform_pref_lang',
  CODE_PREFIX: 'dsa_platform_code_',

  getSolvedIds: function() {
    try {
      const data = localStorage.getItem(this.SOLVED_KEY);
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  },

  isSolved: function(problemId) {
    const solved = this.getSolvedIds();
    return solved.includes(Number(problemId));
  },

  toggleSolved: function(problemId) {
    const id = Number(problemId);
    let solved = this.getSolvedIds();
    if (solved.includes(id)) {
      solved = solved.filter(i => i !== id);
    } else {
      solved.push(id);
    }
    localStorage.setItem(this.SOLVED_KEY, JSON.stringify(solved));
    return solved.includes(id);
  },

  getFavoriteIds: function() {
    try {
      const data = localStorage.getItem(this.FAVORITES_KEY);
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  },

  isFavorite: function(problemId) {
    const favs = this.getFavoriteIds();
    return favs.includes(Number(problemId));
  },

  toggleFavorite: function(problemId) {
    const id = Number(problemId);
    let favs = this.getFavoriteIds();
    if (favs.includes(id)) {
      favs = favs.filter(i => i !== id);
    } else {
      favs.push(id);
    }
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favs));
    return favs.includes(id);
  },

  getSavedCode: function(problemId, language) {
    const key = `${this.CODE_PREFIX}${problemId}_${language}`;
    return localStorage.getItem(key);
  },

  saveCode: function(problemId, language, code) {
    const key = `${this.CODE_PREFIX}${problemId}_${language}`;
    localStorage.setItem(key, code);
  },

  getPreferredLanguage: function() {
    return localStorage.getItem(this.PREF_LANG_KEY) || 'cpp';
  },

  setPreferredLanguage: function(lang) {
    localStorage.setItem(this.PREF_LANG_KEY, lang);
  }
};
