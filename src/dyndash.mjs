import _ from "lodash";

/**
 * @param {Array} args
 * @param {*} expectedResult
 * @returns {Function}
 */
export default async function dyndash(args, expectedResult) {
  const methods = [
    _.uniq,
    _.camelCase,
    _.kebabCase,
    _.lowerCase,
    _.snakeCase,
    _.startCase,
    _.upperCase,
  ];

  return Promise.any(
    methods.map((method) => {
      return new Promise((resolve, reject) => {
        if (_.isEqual(method.apply(null, args), expectedResult)) {
          resolve(method);
        }

        reject("Didn't get expected result");
      });
    })
  );
}
