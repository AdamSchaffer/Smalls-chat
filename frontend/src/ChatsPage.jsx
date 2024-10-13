  import { PrettyChatWindow } from 'react-chat-engine-pretty'

  const ChatsPage = (props) => {
    return (
    <div style={{ height:'100vh' }}>
      <PrettyChatWindow
        projectId='354bb539-4a2d-47fc-8893-9fc8cfdaae17'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
        />
        </div>
    )
  }

  export default ChatsPage


