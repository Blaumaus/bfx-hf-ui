import { connect } from 'react-redux'

import { getNotifications } from '../../redux/selectors/ws'
import NotificationsSidebar from './NotificationsSidebar'
import UIActions from '../../redux/actions/ui'

const mapStateToProps = (state = {}) => ({
  notifications: getNotifications(state),
})

const mapDispatchToProps = dispatch => ({
  closeNotificationPanel: () => {
    dispatch(UIActions.closeNotificationPanel())
  },
  removeNotification: (uid) => {
    dispatch(UIActions.removeNotification(uid))
  },
  clearNotifications: () => {
    dispatch(UIActions.clearNotifications())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsSidebar)
