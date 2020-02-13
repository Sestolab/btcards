CKEDITOR.plugins.add('btcards', {
	requires: 'widget,dialog,contextmenu,smethods',
	lang: 'en,ru,uk',
	icons: 'btcards',

	init: function(editor){
		CKEDITOR.dialog.add('btcards', this.path + 'dialogs/btcards.js');

		editor.addCommand('cardHeader', {
			exec: function(){
				cardElement(true).addClass('card-header');
			}
		});
		editor.addCommand('cardBody', {
			exec: function(editor){
				var el = editor.widgets.getByElement(editor.getSelection().getStartElement()).element,
					ch = editor.document.createElement('div').addClass('card-body');
				el.findOne('.card-footer') ? ch.insertBefore(el.getLast()) : ch.appendTo(el);
			}
		});
		editor.addCommand('cardFooter', {
			exec: function(){
				cardElement().addClass('card-footer');
			}
		});

		editor.widgets.add('btcards', {
			allowedContent: 'div(!card,card-header,card-body,card-footer)',
			requiredContent: 'div(card)',
			editables: { content: 'div' },
			template: '<div class="card"><div></div></div>',

			button: editor.lang.btcards.label,
			dialog: 'btcards',

			upcast: function(element){
				return element.name == 'div' && element.hasClass('card');
			},
			init: function(){
				this.setData({'style': this.element.getAttribute('style'), 'class': this.element.getAttribute('class')});
			},
			data: function(){
				this.data.style ? this.element.setAttribute('style', this.data.style) : this.element.removeAttribute('style');
				this.element.setAttribute('class', this.data.class);
			}
		});

		editor.addMenuGroup('btcards');
		editor.addMenuItems({
			cardHeader: {
				label: editor.lang.btcards.header,
				command: 'cardHeader',
				group: 'btcards',
				order: 1
			},
			cardBody: {
				label: editor.lang.btcards.body,
				command: 'cardBody',
				group: 'btcards',
				order: 1
			},
			cardFooter: {
				label: editor.lang.btcards.footer,
				command: 'cardFooter',
				group: 'btcards',
				order: 2
			}
		});

		editor.contextMenu.addListener(function(element){
			var card = editor.widgets.getByElement(element);

			if (card && card.element.hasClass('card'))
				if (card.element.findOne('.card-body'))
					return {
						cardHeader: card.element.findOne('.card-header') ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_OFF,
						cardFooter: card.element.findOne('.card-footer') ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_OFF
					};
				else
					return { cardBody: CKEDITOR.TRISTATE_OFF };
		});

		function cardElement(h){
			return editor.widgets.getByElement(editor.getSelection().getStartElement()).element.append(editor.document.createElement('div'), h);
		}

	}
});
