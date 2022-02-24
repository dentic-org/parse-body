
const parseBody = (opts = {}) => {
  const parseBodyMiddlewareBefore = async (request) => {
    if (typeof request.event.body !== "undefined" && typeof request.event.body !== "object") {
      request.event = JSON.parse(request.event.body);
    }
  };

  return {
    before: parseBodyMiddlewareBefore,
  };
};
module.exports = parseBody;