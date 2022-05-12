import React from 'react'

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="AboutPageStyle">

                <h2 className="appIntro">
                    CleanReed is designed to be a more organized and minimalist
                    approach for browsing subreddit pages. The end goals for
                    this projects are:
                    <br />
                    <br />
                    <br />
                    1) To automatically take posts from any subreddit you choose
                    from and displaying everything neatly in rows,
                    <br />
                    <br />
                    2) Allowing users to also securely link their reddit account
                    credentials with the app
                    <br />
                    <br />
                    3) For my small React app to be used as a
                    tool/add-on/extension by regular reddit users
                </h2>
                <br />
                <br />

                <h1>Created using: Axios, React and Bootstrap</h1>
                <br />
                <br />

                <h2 className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed/projects/1'}>
                        App roadmap
                    </a>{' '}
                </h2>

                <h2 className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed/wiki'}>
                        App wiki
                    </a>{' '}
                </h2>

                <h2 className="abtPageRes">
                    {' '}
                    <a
                        href={
                            'https://github.com/Toughee/CleanReed/tree/main/docs'
                        }
                    >
                        Documentation for contributors
                    </a>{' '}
                </h2>

                <h2 className="abtPageRes">
                    {' '}
                    <a href={'https://github.com/Toughee/CleanReed'}>
                        Github page
                    </a>{' '}
                </h2>
            </div>
        )
    }
}
