function enableFields(form) {		var activity = getValue('WKNumState');if (activity == 19 || activity == 0) {form.setEnabled('radio_par_aprov', false);form.setEnabled('text_com_aprov', false);form.setEnabled('radio_par_exec', false);form.setEnabled('text_com_exec', false);}if (activity == 5) {form.setEnabled('aprovador', false);form.setEnabled('tituloSA', false);form.setEnabled('codProduto', false);form.setEnabled('checkbox30', false);form.setEnabled('checkbox31', false);form.setEnabled('checkbox32', false);form.setEnabled('checkbox33', false);form.setEnabled('checkbox34', false);form.setEnabled('checkbox35', false);form.setEnabled('checkbox36', false);form.setEnabled('checkbox50', false);form.setEnabled('checkbox51', false);form.setEnabled('checkbox52', false);form.setEnabled('checkbox53', false);form.setEnabled('checkbox54', false);form.setEnabled('checkbox55', false);}if (activity == 10) {form.setEnabled('radio_par_aprov', false);form.setEnabled('text_com_aprov', false);form.setEnabled('aprovador', false);form.setEnabled('tituloSA', false);form.setEnabled('codProduto', false);form.setEnabled('checkbox30', false);form.setEnabled('checkbox31', false);form.setEnabled('checkbox32', false);form.setEnabled('checkbox33', false);form.setEnabled('checkbox34', false);form.setEnabled('checkbox35', false);form.setEnabled('checkbox36', false);form.setEnabled('checkbox50', false);form.setEnabled('checkbox51', false);form.setEnabled('checkbox52', false);}}