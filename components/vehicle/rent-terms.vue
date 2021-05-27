<template>
  <div class="terms">
    <span class="descriptionPartOne text">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </span>
    <span class="descriptionPartTwo text">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </span>

    <h3 class="additionalConditions">Additional conditions:</h3>

    <ul class="text">
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </li>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </li>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RentTerms',
}
</script>

<style scoped>
.terms {
  padding-top: 32px;
  display: flex;
  flex-direction: column;
}

.text {
  color: var(--c-slate-gray);
  font-family: var(--f-reg);
  font-size: 14px;
  line-height: 20px;
}

.descriptionPartOne {
}

.descriptionPartTwo {
  margin-top: 16px;
}

.additionalConditions {
  margin-top: 22px;
}

ul {
  margin-top: 28px;
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 16px;
  letter-spacing: -0.18px;
}

ul li::before {
  content: '\2022';
  color: var(--c-brilliant-rose);
  font-weight: bold;
  width: 1em;
  margin: 0 13px 0 0;
}
</style>
