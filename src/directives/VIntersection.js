export default {
    name: 'Intersection',

    mounted(el, binding) {
        let options = {
          rootMargin: "100px",
          threshold: 1.0,
        };

        let callback = (entries) => {
          if (entries[0].isIntersecting) {
            binding.value()
          }
        }

        let observer = new IntersectionObserver(callback, options);
        observer.observe(el)
    }
}