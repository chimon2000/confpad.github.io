const { h } = window.preact;
const htm = window.htm;

const html = htm.bind(h);

const ErrorMessage = props => {
  let { message } = props;

  let title = encodeURIComponent(message || '');
  let body = encodeURIComponent(`Location: ${window.location.href}`);
  let url = `https://github.com/confpad/confpad.github.io/issues/new?title=${title}&body=${body}`;

  return html`
    <div class="c-notice c-notice--error" role="alert">
      <div class="c-notice__content">
        <h5 class="e-heading u-epsilon">Error!</h5>
        <div>
          <div>
            Something nasty happened, please report it as a
            <a href="${url}" target="_blank" class="e-link">GitHub issue</a>.
          </div>
          ${message && html`
            <div class="u-quarter-spacing">
              <strong>Details:</strong>
              <p>${message}</p>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
};

export default ErrorMessage;
