import React from 'react'

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="appBuildFont">
                <h2 className="appIntro">
                    CleanReed is designed to be a more organized and minimalist
                    approach for browsing subreddit pages. The end goals for
                    this projects are:
                    <br />
                    1) To automatically take posts from any subreddit you choose
                    from and displaying everything neatly in rows,
                    <br />
                    2) Allowing users to also securely link their reddit account
                    credentials with the app
                    <br />
                    3) For my small React app to be used as a
                    tool/add-on/extension by regular reddit users
                </h2>
            </div>
        )
    }
}
