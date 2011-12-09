(fset 'churchill-macro-paragraph
   [tab ?< ?p ?> ?\C-e ?< ?/ ?\M-q ?\C-f])
(global-set-key [?\C-x ?\C-k ?p] 'churchill-macro-paragraph)

(fset 'churchill-macro-h2
   [?\C-a tab ?< ?h ?2 ?> ?\C-e ?< ?/ ?\M-q ?\C-f])
(global-set-key [?\C-x ?\C-k ?2] 'churchill-macro-h2)

(fset 'churchill-macro-h3
   [?\C-a tab ?< ?h ?3 ?> ?\C-e ?< ?/ ?\M-q ?\C-f])
(global-set-key [?\C-x ?\C-k ?3] 'churchill-macro-h3)

(fset 'churchill-macro-tablerow
   [?\C-a ?\M-\\ tab ?< ?t ?r ?> ?< ?t ?h ?> ?\M-c ?\C-f ?\C-f ?< ?/ ?< ?t ?d ?> ?\M-\\ ?\C-e ?< ?/ ?< ?/ ?\C-f])
(global-set-key [?\C-x ?\C-k ?r] 'churchill-macro-tablerow)

(fset 'churchill-macro-nbsp
   "\C-d&nbsp;")
(global-set-key [?\C-x ?\C-k ?n] 'churchill-macro-nbsp)

(fset 'churchill-macro-dlentry
   [?\M-\\ tab ?< ?d ?t ?> ?\M-f ?\M-f ?< ?/ ?\M-\\ ?< ?d ?d ?> ?\C-e ?\M-\\ ?< ?/ ?\C-f])
(global-set-key [?\C-x ?\C-k ?d] 'churchill-macro-dlentry)

(defun churchill-macro-yeargroupspan()
  (interactive)
  (save-excursion
    (insert "</span>")
    (goto-char (mark))
    (insert "<span class=\"yeargroup\">")))
(global-set-key [?\C-x ?\C-k ?y] 'churchill-macro-yeargroupspan)

(defun churchill-macro-strong()
  (interactive)
  (save-excursion
    (insert "</strong>")
    (goto-char (mark))
    (insert "<strong>")))
(global-set-key [?\C-x ?\C-k ?s] 'churchill-macro-strong)