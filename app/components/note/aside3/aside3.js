angular.module('app')
  .component('aside3', {
    transclude: {
      'newestPosts': 'newestPosts'
    },
    templateUrl: './app/components/note/aside3/aside3.html',
    bindings: {
      newest: '<',
      tagsWithPosts: '<',
      selectedCategory: '<'
    },
    controller: function () {
      var vm = this;
      vm.$onInit = function () {
        vm.selectedTags = vm.tagsWithPosts.map(function (tag) {
          return tag.name;
        });
        console.info('selectedTags:', vm.selectedTags);
      }
    }
  });