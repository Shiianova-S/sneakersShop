const router = require('express').Router();

router.route('/')
  .get(async (req, res) => {
    function parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
      return JSON.parse(jsonPayload);
    }
    const token = req.cookies.refreshToken;
    if (req.cookies.refreshToken) res.json(parseJwt(token));
    else { res.json({}); }
  });
module.exports = router;
