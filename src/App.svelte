<script>
  let billType = "monthly";

  const plans = [
    {
      tier: 0,
      icon: ".",
      name: "Public",
      price: { monthly: 0, annually: 0 },
      isCurrent: true,
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      ],
    },
    {
      tier: 1,
      icon: ".",
      name: "Public+",
      price: { monthly: 3.99, annually: 2.42 },
      features: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        "Cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident.",
        "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      tier: 2,
      icon: ".",
      name: "Midnight",
      price: { monthly: 7.99, annually: 5.68 },
      isTrialAvailable: true,
      features: [
        "Curabitur pretium tincidunt lacus.",
        "Nulla gravida orci a odio.",
        "Nullam varius, turpis et commodo pharetra.",
        "Est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
        "Integer in mauris eu nibh euismod gravida.",
      ],
    },
    {
      tier: 3,
      icon: ".",
      name: "Underground",
      price: { monthly: 12.99, annually: 6.67 },
      isPopular: true,
      features: [
        "Phasellus ultrices nulla quis nibh.",
        "Quisque a lectus.",
        "Donec consectetuer ligula vulputate sem tristique cursus.",
        "Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
        "Pellentesque fermentum dolor.",
        "Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.",
        "Sed adipiscing ornare risus.",
      ],
    },
  ];

  function toggleBilling() {
    billType = billType === "monthly" ? "annually" : "monthly";
  }

  function getPriceText(plan) {
    const price = plan.price[billType];
    return price === 0 ? "Free" : `$${price.toFixed(2)}`;
  }

  function getPeriodText() {
    return "/month";
  }
</script>

<div
  class="min-h-screen bg-black p-4 md:p-8"
>
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-center mb-6">
      <div class="relative">
        <div
          class="flex items-center bg-gray-900 backdrop-blur-sm rounded-full p-1"
        >
          <button
            onclick={toggleBilling}
            class="relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 {billType ===
            'monthly'
              ? 'bg-white text-gray-900'
              : 'text-white hover:text-gray-200'}"
          >
            Monthly
          </button>
          <button
            onclick={toggleBilling}
            class="relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 {billType ===
            'annually'
              ? 'bg-white text-gray-900'
              : 'text-white hover:text-gray-200'}"
          >
            Annually
          </button>
        </div>
        {#if billType === "annually"}
          <div
            class="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
          >
            Save 20%
          </div>
        {/if}
      </div>
    </div>

    <div class="text-center mb-8">
      <a
        href="#"
        class="text-white/80 hover:text-white text-sm transition-colors"
      >
        Can't choose? Compare plans
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each plans as plan}
        <div class="relative">
          {#if plan.isPopular}
            <div
              class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
            >
              <div
                class="bg-gradient-to-r from-red-800 to-red-900 text-white text-xs font-bold px-4 py-4 rounded-full shadow-lg"
              >
                MOST POPULAR
              </div>
            </div>
          {/if}

          <div
            class="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-full flex flex-col {plan.isPopular
              ? 'ring-2 ring-gray-700'
              : ''}"
          >
            <div class="mb-6">
              <div class="flex items-center gap-2 mb-2"></div>
              <span class="text-xl">{plan.icon}</span>
              <span class="text-white/60 text-sm font-medium"
                >TIER {plan.tier}</span
              >
              {#if billType === "annually" && plan.price.annually > 0}
                <span
                  class="ml-8 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full"
                >
                  -20%
                </span>
              {/if}
              <h3 class="text-white text-xl font-bold mb-4">{plan.name}</h3>

              <div class="mb-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-white text-3xl font-bold"
                    >{getPriceText(plan)}</span
                  >
                  {#if plan.price[billType] > 0}
                    <span class="text-white/60 text-sm">{getPeriodText()}</span>
                  {/if}
                </div>
              </div>

              <div class="mb-4">
                {#if plan.isCurrent}
                  <button
                    class="w-full bg-gray-800 text-white py-3 rounded-lg font-medium cursor-not-allowed"
                  >
                    CURRENT PLAN
                  </button>
                {:else if plan.isTrialAvailable}
                  <button
                    class="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    FREE 7-DAYS TRIAL
                  </button>
                {:else}
                  <button
                    class="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    SUBSCRIBE
                  </button>
                {/if}
              </div>

              <div class="text-center">
                <a
                  href="#"
                  class="text-white/60 hover:text-white text-sm transition-colors flex items-center justify-center gap-1"
                >
                  Send as a Gift
                </a>
              </div>
            </div>

            <div class="flex-1">
              <ul class="space-y-3">
                {#each plan.features as feature}
                  <li class="flex items-start gap-3">
                    <div
                      class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5"
                    >
                      <svg
                        class="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-white/80 text-sm leading-relaxed"
                      >{feature}</span
                    >
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
