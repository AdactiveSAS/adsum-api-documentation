/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>About US</h5>
            <p>
            Adactive creates and publishes digital solutions for shopper
            marketing experiences and innovative location-based services.
            <a href="https://adactive.com"><i className="fas fa-link"></i> https://adactive.com</a>
            <a href="mailto:contact@adactive.com"><i className="fas fa-envelope"></i> contact@adactive.com</a>
            <a href="https://www.linkedin.com/company/adactive-sas/"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://twitter.com/adactivefr"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="https://www.facebook.com/Adactive-124871357587753/"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="https://www.youtube.com/user/adactivefr"><i className="fab fa-youtube"></i> Youtube</a>
            </p>
          </div>
          <div>
            <h5>Headquarter</h5>
            <div>
              <p><i className="fas fa-map"></i> 50 rue Klock - 92110 Clichy, France</p>
              <p><i className="fas fa-phone"></i> +33 (0)6 16 17 50 69</p>
            </div>
          </div>
          <div>
            <h5>Asia office</h5>
            <div>
              <p><i className="fas fa-map"></i> 750A North Bridge Road - 198718 Singapore</p>
              <p><i className="fas fa-linkedin"></i> +65 9082 9380</p>
            </div>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
