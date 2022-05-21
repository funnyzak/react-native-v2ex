import { IThemeAssets } from '../types'

const Assets: IThemeAssets = {
  images: {
    icons: {
      app: {
        icon: require('@res/images/icons/app/256.png'),
        arrow: {
          light: require('@res/images/icons/app/arrow/light.png'),
          dark: require('@res/images/icons/app/arrow/dark.png')
        },
        slogo: {
          light: require('@res/images/icons/app/slogo/light.png'),
          dark: require('@res/images/icons/app/slogo/dark.png')
        }
      },
      draw: {
        hot: {
          active: require('@res/images/icons/draw/fire-active.png'),
          inActive: require('@res/images/icons/draw/fire-inactive.png')
        },
        latest: {
          active: require('@res/images/icons/draw/news-active.png'),
          inActive: require('@res/images/icons/draw/news-inactive.png')
        }
      },
      header: {
        back: require('@res/images/icons/header/back.png'),
        stat: require('@res/images/icons/header/board.png'),
        moreVert: require('@res/images/icons/header/more_vert.png'),
        more: require('@res/images/icons/header/more.png'),
        search: require('@res/images/icons/header/search.png'),
        star: require('@res/images/icons/header/star.png'),
        heart: require('@res/images/icons/header/heart.png'),
        logout: require('@res/images/icons/header/logout.png'),
        link: require('@res/images/icons/header/urlscheme.png'),
        refresh: require('@res/images/icons/header/refresh.png')
      },
      node: {
        docment: require('@res/images/icons/node/document.png'),
        star: require('@res/images/icons/node/star.png'),
        urlscheme: require('@res/images/icons/node/urlscheme.png')
      },
      placeholder: {
        notification: require('@res/images/icons/placeholder/notification.png'),
        search: require('@res/images/icons/placeholder/search.png'),
        construction: require('@res/images/icons/placeholder/construction.png')
      },
      profile: {
        avatar: require('@res/images/icons/profile/default-avatar.png'),
        github: require('@res/images/icons/profile/github.png'),
        location: require('@res/images/icons/profile/location.png'),
        telegram: require('@res/images/icons/profile/telegram.png'),
        twitter: require('@res/images/icons/profile/twitter.png'),
        urlschme: require('@res/images/icons/profile/urlscheme.png')
      },
      bottomTab: {
        home: {
          active: require('@res/images/icons/tab/bottom/home-focus.png'),
          inActive: require('@res/images/icons/tab/bottom/home.png')
        },
        hot: {
          active: require('@res/images/icons/tab/bottom/hot-focus.png'),
          inActive: require('@res/images/icons/tab/bottom/hot.png')
        },
        nodes: {
          active: require('@res/images/icons/tab/bottom/node-focus.png'),
          inActive: require('@res/images/icons/tab/bottom/node.png')
        },
        like: {
          active: require('@res/images/icons/tab/bottom/like-focus.png'),
          inActive: require('@res/images/icons/tab/bottom/like.png')
        },
        notifications: {
          active: require('@res/images/icons/tab/bottom/notification-focus.png'),
          inActive: require('@res/images/icons/tab/bottom/notification.png')
        },
        my: {
          active: require('@res/images/icons/tab/bottom/my-focus.png'),
          inActive: require('@res/images/icons/tab/bottom/my.png')
        }
      },
      tabbar: {
        title: {
          comment: require('@res/images/icons/tab/title/comment.png'),
          latest: require('@res/images/icons/tab/title/news.png')
        }
      },
      table: {
        rightArrow: require('@res/images/icons/table/right-arrow.png'),
        cached: require('@res/images/icons/table/cached.png'),
        email: require('@res/images/icons/table/email.png'),
        github: require('@res/images/icons/table/github.png'),
        group: require('@res/images/icons/table/group.png'),
        language: require('@res/images/icons/table/language.png'),
        opensource: require('@res/images/icons/table/opensource.png'),
        score: require('@res/images/icons/table/score.png'),
        share: require('@res/images/icons/table/share.png'),
        theme: require('@res/images/icons/table/theme.png'),
        twitter: require('@res/images/icons/table/twitter.png'),
        urlschme: require('@res/images/icons/table/urlscheme.png'),
        check: require('@res/images/icons/table/check-right.png')
      },
      topic: {
        comment: require('@res/images/icons/topic/comment.png'),
        paper: require('@res/images/icons/topic/paper.png'),
        talk: require('@res/images/icons/topic/people-voice.png'),
        time: require('@res/images/icons/topic/update.png')
      },
      notification: {
        time: require('@res/images/icons/notification/time.png'),
        action: require('@res/images/icons/notification/action.png')
      }
    }
  }
}

export default Assets
