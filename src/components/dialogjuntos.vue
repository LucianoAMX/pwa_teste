<template>
  <v-toolbar flat>
    <dialog-teste ref="nome"></dialog-teste>
    <dialog-dois ref="nomedois"></dialog-dois>
  </v-toolbar>
</template>

<script>
import DialogTeste from "@/components/dialogos.vue";
import DialogDois from "@/components/dialogosDois.vue";

export default {
  components: {
    DialogTeste,
    DialogDois
  },
  methods: {
    open(editedIndex, editedItem) {
      if (editedItem.name == "Eclair") {
        this.$refs.nome.open(editedIndex, editedItem);
      } else {
        this.$refs.nomedois.open(editedIndex, editedItem);
      }
    }
  }
};
</script>
