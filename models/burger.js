
module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define('burger', {
        burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {len: [1,30]}
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
      });
      return Burger;
};


// const burgers = {
//     selectAll: function (cb) {
//         orm.selectAll("burgers", function (res) {
//             cb(res);
//         });
//     },
//     updateOne: function (newVal, id, cb) {
//         orm.updateOne("burgers", newVal, id, function (res) {
//             cb(res);
//         });
//     },
//     insertOne: function (burgerName, cb) {
//         orm.insertOne("burgers", burgerName, function (res) {
//             cb(res);
//         });
//     }
// };
// return burgers;