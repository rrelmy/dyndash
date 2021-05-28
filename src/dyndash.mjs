import _ from "lodash";

/**
 * @param {Array} args
 * @param {*} expectedResult
 * @returns {Function}
 */
export default async function dyndash(args, expectedResult) {
  const methodNames = Object.keys(_).filter(
    (name) => typeof _[name] === "function"
  );

  return Promise.any(
    methodNames.map((name) => {
      const method = _[name];
      return new Promise((resolve, reject) => {
        try {
          if (
            _.isEqual(method.apply(null, _.cloneDeep(args)), expectedResult)
          ) {
            // console.info("Selected ", name);
            return resolve(method);
          }
        } catch (e) {
          // We don't case
        }

        reject("Didn't get expected result");
      });
    })
  );
}
