/**
 * Created by n.belousov on 10.08.2016.
 */
Generator.prototype = Object.create(Stats.prototype);
Generator.prototype.constructor = Generator;

function Generator(value, maxValue) {
    Stats.apply(this, arguments);
    this.value = value;
    this.maxValue = maxValue;
}

var mines = new Generator(5, 10);
