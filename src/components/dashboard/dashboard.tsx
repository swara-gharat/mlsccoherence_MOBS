import React from 'react';
import './dashboard.scss';
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../shared/models/state.models';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setUserAction } from '../../shared/store/actions/user.actions';

interface Props extends RouteComponentProps {
    username: string;
    setUserType(username: string): void
}

class Dashboard extends React.Component<Props> {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": 1000,
            "height": 490,
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "light",
            "locale": "in",
            "isTransparent": false
        });
        script.setAttribute("type", "text/javascript");
        document.getElementById("tradingview-widget")?.appendChild(script);
    }

    render() {
        return (
            <div className="dashboard">
                Welcome, {this.props.username}
                <a href="https://oxo-dex.on.fleek.co/">continue</a>
                <button onClick={this.signOut.bind(this)} className="dashboard--button">Sign out</button>
                <div id="tradingview-widget">
                    <label id="cl1">Crypto Market Screener</label>
                    <div className="ct1">
                        <div className="tradingview-widget-container__widget"></div>
                        <div className="tradingview-widget-copyright">
                            <a href="https://in.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    signOut() {
        this.props.setUserType('');
        this.props.history.push('/');
    }
}

function mapStateToProps(state: State) {
    const { userState } = state;
    return { username: userState.username };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        setUserType: (username: string) =>
          dispatch(setUserAction({
              username
          }))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
