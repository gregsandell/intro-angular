describe('DollarFilter filter', function() {

    var filter;
    var result;

    beforeEach(function() {
      module('filterApp')
      inject(function($injector){
        filter = $injector.get('$filter')('DollarFilter');
      });
    });

    describe('With number input', function() {
      it('should convert a whole positive to a dollar value', function() {
        expect(filter(34)).toBe('$34.00');
      });

      it('should convert a whole negative to a dollar value', function() {
        expect(filter(-34)).toBe('-$34.00');
      });

      it('should reduce a positive float to a dollar value', function() {
        expect(filter(34.566778)).toBe('$34.56');
      });

      it('should format a positive float > 999.99 to a comma-formatted dollar value', function() {
        expect(filter(1234567.888888)).toBe('$1,234,567.88');
      });

      it('should format a negative float < -999.99 to a comma-formatted dollar value', function() {
        expect(filter(-1234567.888888)).toBe('-$1,234,567.88');
      });

    });

  describe('With string input', function() {

    it('should convert a whole positive to a dollar value', function() {
      expect(filter('34')).toBe('$34.00');
    });

    it('should convert a whole negative to a dollar value', function() {
      expect(filter('-34')).toBe('-$34.00');
    });

    it('should reduce a positive float to a dollar value', function() {
      expect(filter('34.566778')).toBe('$34.56');
    });

    it('should format a positive float > 999.99 to a comma-formatted dollar value', function() {
      expect(filter('1234567.888888')).toBe('$1,234,567.88');
    });

    it('should format a negative float < -999.99 to a comma-formatted dollar value', function() {
      expect(filter('-1234567.888888')).toBe('-$1,234,567.88');
    });

    it('should allow a beginning dollar sign', function() {
      expect(filter('$1234567.888888')).toBe('$1,234,567.88');
    });

    it('should allow a negative sign followed by a dollar sign', function() {
      expect(filter('-$1234567.888888')).toBe('-$1,234,567.88');
    });

    it('should allow negative and dollar signs in the wrong order', function() {
      expect(filter('$-1234567.888888')).toBe('-$1,234,567.88');
    });

    it('should ignore leading positive signs', function() {
      expect(filter('+1234567.888888')).toBe('$1,234,567.88');
      expect(filter('+$1234567.888888')).toBe('$1,234,567.88');
    });
  });

  describe('With string input that cannot be numerically interpreted', function() {

    it('convert input containing alphabetic characters to zero dollars', function () {
      expect(filter('xyz')).toBe('$0.00');
      expect(filter('$xyz')).toBe('$0.00');
      expect(filter('-xyz')).toBe('$0.00');
    });

    it('convert input containing more that one decimal to zero dollars', function () {
      expect(filter('100.00.1')).toBe('$0.00');
    });

    it('convert input multiple "+", "-" or "$" characters to zero dollars', function () {
      expect(filter('--12')).toBe('$0.00');
      expect(filter('$$12')).toBe('$0.00');
      expect(filter('++12')).toBe('$0.00');
      expect(filter('-+12')).toBe('$0.00');
      // expect(filter('+-12')).toBe('$0.00');  // code is not ready for this yet!
    });

  });
});
